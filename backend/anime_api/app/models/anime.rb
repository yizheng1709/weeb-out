class Anime < ApplicationRecord
    has_many :comments 
    # validates_uniqueness_of :summary
end
