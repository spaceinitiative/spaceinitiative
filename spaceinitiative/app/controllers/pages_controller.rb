class PagesController < ApplicationController
  def projects
    @projects = Project.all.sort { |a, b| a.created_at <=> b.created_at }
  end
end
