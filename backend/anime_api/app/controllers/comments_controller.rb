class CommentsController < ApplicationController
    before_action :set_anime

    def create 
        comment = @anime.comments.create(comment_params)
        render json: comment, only: [:anime_id, :content, :name, :id]
    end

    private 

    def set_anime 
        @anime = Anime.find(params[:anime_id])
    end

    def comment_params 
        params.require(:comment).permit(:anime_id, :name, :content)
    end
end
