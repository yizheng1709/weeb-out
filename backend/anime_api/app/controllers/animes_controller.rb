class AnimesController < ApplicationController
    def index
        animes = Anime.all
        render json: animes, only: [:id, :title, :summary, :cover, :tags]
    end
    
    def show 
        anime = Anime.find_by_id(params[:id])
        render json: anime, only: [:id, :title, :summary, :cover, :tags], include: [:comments]
    end
end
