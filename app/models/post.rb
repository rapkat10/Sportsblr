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

    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User

end
