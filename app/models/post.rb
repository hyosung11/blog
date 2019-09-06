class Post
# ============
#   Set Up
# ============
# add attribute readers for instance access
attr_reader :idea

  # connect to postgres
  DB = PG.connect({:host => "localhost", :port => 5432, :dbname => 'trainingblog_development'})

  # ROUTES

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
    results = DB.exec(
      <<-SQL
        INSERT INTO blogs (name, image, body)
        VALUES ('#{opts["name"]}', '#{opts["image"]}', '#{opts["body"]}')
        RETURNING id, name, image, body;
      SQL
    )
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
    results = DB.exec(
      <<-SQL
        UPDATE blogs
        SET
          name = '#{opts["name"]}',
          image = '#{opts["image"]}',
          body = '#{opts["body"]}'
        WHERE id = #{id}
        RETURNING id, name, image, body;
      SQL
    )
    return {
      "id" => results.first["id"].to_i,
      "name" => results.first["name"],
      "image" => results.first["image"],
      "body" => results.first["body"]
    }
  end
end
