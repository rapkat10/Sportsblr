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

    has_one_attached :photo

    def default_photo
        if !self.photo.attached?
            file = File.open('app/assets/images/default_user_pic.jpg')
            self.photo.attach(io: file,
            filename: 'default_user_pic.jpg', content_type: 'image/jpg')
        end
    end

    has_many :posts,
        foreign_key: :user_id,
        class_name: :Post

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
