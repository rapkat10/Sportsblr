# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all
Post.delete_all
Like.delete_all
Follow.delete_all

rapkat = User.create!( 
    email: 'rapkat99@sportsblr.com',
    username: 'rapkat99',
    password: 'hunter12'
)

demo = User.create!( 
    email: 'demo@sportsblr.com',
    username: 'DemoUser',
    password: 'password'
)

leyla = User.create!( 
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


post1 = Post.create!(
    title: "Champions league Final Game is soon!", 
    body: "The game is goin to be in Istanbul",
    post_type: "Text Form",
    user_id: demo.id
)

post2 = Post.create!(
    body: "Beautiful Stadium",
    post_type: "Photo Form",
    user_id: rapkat.id
)

file4 = File.open('app/assets/images/fcb.jpg')
post2.photo.attach(io: file4, filename: 'fcb.jpg')

post3 = Post.create!(
    title: "https://www.youtube.com/watch?v=rT-8s97CMfI",
    post_type: "Link Form",
    user_id: rapkat.id
)


post4 = Post.create!(
    title: "A wise man once said.....",
    body: "Unknown",
    post_type: "Quote Form",
    user_id: demo.id
)

post5 = Post.create!(
    body: "Vroom Vroom",
    post_type: "Photo Form",
    user_id: rapkat.id
)

file5 = File.open('app/assets/images/motorcycle.jpg')
post5.photo.attach(io: file5, filename: 'motorcycle.jpg')


post6 = Post.create!(
    body: "",
    post_type: "Photo Form",
    user_id: leyla.id
)

file6 = File.open('app/assets/images/sunday.jpeg')
post6.photo.attach(io: file6, filename: 'sunday.jpeg')

post7 = Post.create!(
    body: "",
    post_type: "Photo Form",
    user_id: leyla.id
)

file7 = File.open('app/assets/images/motorcycle1.jpg')
post7.photo.attach(io: file7, filename: 'motorcycle1.jpg')


Like1 = Like.create!(
    post_id: post1.id,
    user_id: demo.id
)

Like2 = Like.create!(
    post_id: post1.id,
    user_id: leyla.id
)

Like3 = Like.create!(
    post_id: post1.id,
    user_id: rapkat.id
)
Like4 = Like.create!(
    post_id: post2.id,
    user_id: demo.id
)

Like5 = Like.create!(
    post_id: post3.id,
    user_id: leyla.id
)

Like6 = Like.create!(
    post_id: post4.id,
    user_id: rapkat.id
)


follow1 = Follow.create!(
    follower_id: leyla.id,
    followed_id: demo.id
)

##################################


user1 = User.create!( 
    email: 'user1',
    username: 'Messi10',
    password: 'hunter10'
)

file8 = File.open('app/assets/images/messi.jpg')
user1.photo.attach(io: file8, filename: 'messi.jpg')

post8 = Post.create!(
    body: "",
    post_type: "Photo Form",
    user_id: user1.id
)

file9 = File.open('app/assets/images/messi.jpg')
post8.photo.attach(io: file9, filename: 'messi.jpg')


user2 = User.create!( 
    email: 'user2',
    username: 'Lebron23',
    password: 'hunter10'
)

file10 = File.open('app/assets/images/lebron.png')
user2.photo.attach(io: file10, filename: 'lebron.png')

post9 = Post.create!(
    body: "",
    post_type: "Photo Form",
    user_id: user2.id
)

file11 = File.open('app/assets/images/lebron.png')
post9.photo.attach(io: file11, filename: 'lebron.png')


user3 = User.create!( 
    email: 'user3',
    username: 'Ronaldo_CR7',
    password: 'hunter10'
)


file12 = File.open('app/assets/images/ronaldo.jpg')
user3.photo.attach(io: file12, filename: 'ronaldo.jpg')

post10 = Post.create!(
    body: "",
    post_type: "Photo Form",
    user_id: user3.id
)

file13 = File.open('app/assets/images/ronaldo.jpg')
post10.photo.attach(io: file13, filename: 'ronaldo.jpg')


user4 = User.create!( 
    email: 'user4',
    username: 'JJ_Watt99',
    password: 'hunter10'
)

file14 = File.open('app/assets/images/jjwat.jpeg')
user4.photo.attach(io: file14, filename: 'jjwat.jpeg')

post11 = Post.create!(
    body: "",
    post_type: "Photo Form",
    user_id: user4.id
)

file15 = File.open('app/assets/images/jjwat.jpeg')
post11.photo.attach(io: file15, filename: 'jjwat.jpeg')


user5 = User.create!( 
    email: 'user5',
    username: 'Ronaldinho10',
    password: 'hunter10'
)

file16 = File.open('app/assets/images/ronaldinho.jpg')
user5.photo.attach(io: file16, filename: 'ronaldinho.jpg')

post12 = Post.create!(
    body: "",
    post_type: "Photo Form",
    user_id: user5.id
)

file17 = File.open('app/assets/images/ronaldinho.jpg')
post12.photo.attach(io: file17, filename: 'ronaldinho.jpg')


