
@canFollowUsers.each do |user|
  json.set! user.id do
    json.partial! 'api/follows/followIndex', user: user
  end
end