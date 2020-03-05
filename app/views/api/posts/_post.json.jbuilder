json.extract! post, :id, :title, :body, :post_type, :user_id

if post.photo.attached?
    json.image_url url_for(post.photo)
end