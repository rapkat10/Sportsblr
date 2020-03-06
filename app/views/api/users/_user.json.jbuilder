json.extract! user, :id, :email, :username

json.img_url url_for(user.photo) if user.photo.attached?