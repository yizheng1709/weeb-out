class Comment < ApplicationRecord
    validates_presence_of :name, :content, :anime_id
end
