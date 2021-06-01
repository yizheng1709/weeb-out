class CommentsController < ApplicationController

    def index 
        if params["anime_id"]
            comments = Comment.where("anime_id = ?", params["anime_id"])
            render json: comments, only: [:anime_id, :content, :name]
        end
    end

    def create 
        comment = Comment.new(comment_params)
        if comment.save 
            render json: comment, only: [:anime_id, :content, :name]
        end
    end

    private 

    def comment_params 
        params.require(:comment).permit(:anime_id, :name, :content)
    end
end
