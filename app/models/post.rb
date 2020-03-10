# == Schema Information
#
# Table name: posts
#
#  id         :bigint           not null, primary key
#  title      :string
#  body       :text
#  post_type  :string           not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Post < ApplicationRecord
    
    validates :post_type, :user_id, presence: true

    has_one_attached :photo
    has_one_attached :audio
    has_one_attached :video

    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User

    has_many :likes,
        foreign_key: :post_id,
        class_name: :Like

    has_many :liked_users,
        through: :likes,
        source: :user


    def getLikersIds(post)
        post.likes.map do |like|
            like.user_id
        end
    end

    def find_like(user_id)
        like = Like.where(user_id: user_id)
            .where(post_id: self.id).select(:id).first
        like ? like.id : nil
    end

end

