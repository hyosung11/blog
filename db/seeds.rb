# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Post.create({
  "name" => "Hulk Hogan",
  "image" => "https://dailystormer.name/wp-content/uploads/2018/07/hogan-750x430.jpg",
  "body" => "To all my little Hulkamaniacs, say your prayers, take your vitamins and you will never go wrong."
})

Post.create({
  "name" => "Tia-Clair Toomey: CrossFit\s Fittest Woman on Earth",
  "image" => "https://cdn.i-scmp.com/sites/default/files/styles/landscape/public/d8/images/methode/2019/03/22/4dc10586-4b93-11e9-8e02-95b31fc3f54a_image_hires_112108.jpg?itok=UwXPQVwn&v=1553224872",
  "body" => "What I believe is that experience trumps confidence. The more I competed and gained experience, the more confident I became and the more I understood my abilities."
})

Post.create({
  "name" => "Hafþór Julius Bjornsson",
  "image" => "https://cdn.newsapi.com.au/image/v1/c2bab4df6528b5ba3c1fe5f57c078437?width=650",
  "body" => "You have to be willing to work 365 days a year and be absolutely obsessed with what you want to achieve and if you’re willing to go that far then you’re able to be the World’s Strongest Man."
})

Post.create({
  "name" => "Bruce Lee",
  "image" => "https://miro.medium.com/max/800/1*YvNTsiB-xz5V7bUHiQo8VA.jpeg",
  "body" => "You must be shapeless, formless, like water. When you pour water in a cup, it becomes the cup. When you pour water in a bottle, it becomes the bottle. When you pour water in a teapot, it becomes the teapot. Water can drip and it can crash. Become like water my friend."
})
