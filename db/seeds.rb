# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

demo = User.new( 
    email: 'demo@sportsblr.com',
    username: 'DemoUser',
    password: 'password'
)

rapkat = User.new( 
    email: 'rapkat99@sportsblr.com',
    username: 'rapkat99',
    password: 'hunter12'
)

leyla = User.new( 
    email: 'leyla_100@sportsblr.com',
    username: 'leyla100',
    password: 'hunter10'
)

    
file1 = File.open('app/assets/images/default_user_pic.jpg')
demo.photo.attach(io: file1, filename: 'default_user_pic.jpg')

file2 = File.open('app/assets/images/soccerball.jpg')
rapkat.photo.attach(io: file2, filename: 'soccerball.jpg')

file3 = File.open('app/assets/images/motorcycle.jpg')
leyla.photo.attach(io: file3, filename: 'motorcycle.jpg')

demo.save!
rapkat.save!
leyla.save!


post1 = Post.create!(
    title: "Champions league Final Game is soon!", 
    body: "The game is goin to be in Istanbul",
    post_type: "text",
    user_id: demo.id
)

post2 = Post.new(
    body: "Beautiful Stadium",
    post_type: "photo",
    user_id: rapkat.id
)

file4 = File.open('app/assets/images/fcb.jpg')
post2.photo.attach(io: file4, filename: 'fcb.jpg')
post2.save!

post3 = Post.create!(
    title: "Soccer Skills", 
    body: "https://www.youtube.com/watch?v=rT-8s97CMfI",
    post_type: "link",
    user_id: rapkat.id
)
