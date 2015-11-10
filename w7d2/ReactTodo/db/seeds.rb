# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

10.times do |n|
  Todo.create!(
    title: "News#{n}",
    body: "body#{n}",
    done: false,
    topic: "news"
  )
end

10.times do |n|
  Todo.create!(
    title: "Sports#{n}",
    body: "body#{n}",
    done: false,
    topic: "sports"
  )
end
