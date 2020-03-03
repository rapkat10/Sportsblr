# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

demo = User.create( email: 'demo@sportsblr.com',
    username: 'DemoUser',
    password: 'password')

rapkat = User.create( email: 'rapkat99@sportsblr.com',
    username: 'rapkat99',
    password: 'hunter12')

leyla = User.create( email: 'leyla@sportsblr.com',
    username: 'leyla10',
    password: 'hunter10')