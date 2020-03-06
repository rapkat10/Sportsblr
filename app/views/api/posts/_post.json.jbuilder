json.extract! post, :id, :title, :body, :post_type, :user_id

# if post.photo.attached?
#     json.img_url url_for(post.photo)
# end
json.users_Username post.user.username

json.users_img_Url url_for(post.user.photo) if post.user.photo.attached?

json.img_url url_for(post.photo) if post.photo.attached?
json.audio_url url_for(post.audio) if post.audio.attached?
json.video_url url_for(post.video) if post.video.attached?
