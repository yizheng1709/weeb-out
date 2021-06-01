class Comment < ApplicationRecord
    belongs_to :anime 
    validates_presence_of :name, :content, :anime_id
end
