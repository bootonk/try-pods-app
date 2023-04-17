class Api::PodcastsController < ApplicationController
  def create
    podcast = Podcast.create(podcast_params)
    render json: podcast
  end

  def destroy
    podcast = Podcast.find(params[:id])
    podcast.destroy
  end

  private

  def podcast_params
    params.require(:podcast).permit(:list_id, :title)
  end
end
