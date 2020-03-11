# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord

    validates :email, :username, :session_token, presence: true, uniqueness: true
    validates :password_digest, presence: true
    validates :password, length: { minimum: 6, allow_nil: true }

    attr_reader :password

    after_initialize :ensure_session_token
    after_create :default_photo

    has_many :posts,
        foreign_key: :user_id,
        class_name: :Post

    has_many :likes,
        foreign_key: :user_id,
        class_name: :Like

    has_many :liked_posts,
        through: :likes,
        source: :post

    has_many :followings,
        foreign_key: :follower_id,
        class_name: :Follow

    has_many :followed_users, # array of users who you follow
        through: :followings,
        source: :followed


    has_many :followers,
        foreign_key: :followed_id,
        class_name: :Follow

    has_many :followers_users, # array of users who follows you
        through: :followers,
        source: :follower


    has_one_attached :photo

    def default_photo
        if !self.photo.attached?
            file = File.open('app/assets/images/default_user_pic.jpg')
            self.photo.attach(io: file,
            filename: 'default_user_pic.jpg', content_type: 'image/jpg')
        end
    end

    def unfollowed_users
        User.where.not(id: self.id)
            .where.not(id: Follow.select(:followed_id)
            .where(follower_id: self.id)).limit(4)
    end

     def find_follow(follower_id)
        follow = Follow.where(follower_id: follower_id).first
        follow ? follow.id : nil
    end

    def getfollowerIds(user)
        user.followers_users.map do |user|
            user.id
        end
    end

    def getfollowingIds(user)
        user.followed_users.map do |user|
            user.id
        end
    end

    def getPostIds(user)
        user.posts.map do |post|
            post.id
        end
    end

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        return nil unless user && user.is_password?(password)
        return user
    end

    def is_password?(password)
        bcp = BCrypt::Password.new(self.password_digest)
        bcp.is_password?(password)
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def reset_session_token!
        self.session_token = self.class.generate_session_token
        self.save!
        self.session_token
    end

    def ensure_session_token
        self.session_token ||= self.class.generate_session_token
    end

    def self.generate_session_token
        SecureRandom::urlsafe_base64(16)
    end

end
