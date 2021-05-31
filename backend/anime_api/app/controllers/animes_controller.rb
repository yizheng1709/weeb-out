class AnimesController < ApplicationController
    def index
        animes = Anime.all
        render json: animes, only: [:id, :title, :summary, :cover, :tags]
    end
end
