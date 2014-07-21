class Api::MembersController < ApplicationController
  def index
    render json: Member.all
  end
end
