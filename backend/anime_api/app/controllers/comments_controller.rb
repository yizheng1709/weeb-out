class CommentsController < ApplicationController
    before_action :set_anime

    def index 
        if params["anime_id"]
            comments = @anime.comments
            render json: comments, only: [:anime_id, :content, :name, :id]
        end
    end

    def create 
        comment = Comment.new(comment_params)
        if comment.save 
            render json: comment, only: [:anime_id, :content, :name, :id]
        end
    end

    private 

    def set_anime 
        @anime = Anime.find(params[:anime_id])
    end

    def comment_params 
        params.require(:comment).permit(:anime_id, :name, :content)
    end
end
