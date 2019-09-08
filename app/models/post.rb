class Post
# ============
#   Set Up
# ============
# add attribute readers for instance access
attr_reader :idea

  # connect to postgres
  if(ENV['DATABASE_URL'])
      uri = URI.parse(ENV['DATABASE_URL'])
      DB = PG.connect(uri.hostname, uri.port, nil, nil, uri.path[1..-1], uri.user, uri.password)
  else
    DB = PG.connect({:host => "localhost", :port => 5432, :dbname => 'trainingblog_development'})
  end

# ===================
#  Prepared Statements
# ===================
DB.prepare("create_post",
  <<-SQL
    INSERT INTO blogs (name, image, body)
    VALUES ($1, $2, $3)
    RETURNING id, name, image, body;
  SQL
)
DB.prepare("update_post",
  <<-SQL
    UPDATE blogs
    SET name = $2, image = $3, body = $4
    WHERE id = $1
    RETURNING id, name, image, body;
  SQL
)
  # index
  def self.all
    results = DB.exec("SELECT * FROM blogs ORDER BY id ASC;")
    return results.map do |result|
      {
        "id" => result["id"].to_i,
        "name" => result["name"],
        "image" => result["image"],
        "body" => result["body"]
      }
    end
  end

  # show
  def self.find(id)
    # Query to find posts
    results = DB.exec("SELECT * FROM blogs WHERE id=#{id};")
    # if there are results, return the hash
    if !results.num_tuples.zero?
      return {
        "id" => results.first["id"].to_i,
        "name" => results.first["name"],
        "image" => results.first["image"],
        "body" => results.first["body"]
      }
    # if there are no results, return an error
    else
      return {
        "error" => "post does not exist"
      }, status: 400
    end
  end

  # create
  def self.create(opts)
    results = DB.exec_prepared("create_post", [opts["name"], opts["image"], opts["body"]])
    return {
      "id" => results.first["id"].to_i,
      "name" => results.first["name"],
      "image" => results.first["image"],
      "body" => results.first["body"]
    }
  end

  # delete
  def self.delete(id)
    results = DB.exec("DELETE FROM blogs WHERE id=#{id};")
    return { "deleted" => true}
  end

  # update
  def self.update(id, opts)
    results = DB.exec_prepared("update_post", [id, opts["name"], opts["image"], opts["body"]])
    return {
      "id" => results.first["id"].to_i,
      "name" => results.first["name"],
      "image" => results.first["image"],
      "body" => results.first["body"]
    }
  end
end
