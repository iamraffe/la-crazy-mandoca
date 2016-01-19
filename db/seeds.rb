# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Category.create([{name: "Mandocas"}])
Category.create([{name: "Sweet"}])
Category.create([{name: "Nerd/2"}])
Category.create([{name: "Caliente"}])
User.create({email: "raffe90@gmail.com", admin: true})