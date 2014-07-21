class AddProjects < ActiveRecord::Migration
  def up
    projects = JSON.parse IO.read("#{File.dirname __FILE__}/seed_projects.json")
    projects.each do |data|
      new_project = Project.new data
      new_project.save
    end
  end

  def down
    Project.delete_all
  end
end
