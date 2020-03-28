json.extract! user, :id, :email, :username

json.img_url url_for(user.photo) if user.photo.attached?

json.followerIds user.getfollowerIds(user)
json.followingIds user.getfollowingIds(user)
json.followId user.find_follow(current_user.id) if current_user

json.liked_posts user.liked_posts

json.postIds user.getPostIds(user)