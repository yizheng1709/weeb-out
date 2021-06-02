class CommentsController < ApplicationController
    before_action :set_anime

    # def index 
    #     if params["anime_id"]
    #         comments = @anime.comments
    #         render json: comments, only: [:anime_id, :content, :name, :id]
    #     end
    # end

    def create 
        # binding.pry
        comment = @anime.comments.create(comment_params)
        # if comment.save 
        render json: comment, only: [:anime_id, :content, :name, :id]
        # render json: @anime, only[:id, :title, :summary, :cover, :tags], include: [:comments]
        # end
    end

    private 

    def set_anime 
        @anime = Anime.find(params[:anime_id])
    end

    def comment_params 
        params.require(:comment).permit(:anime_id, :name, :content)
    end
end
