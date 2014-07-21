class AddMembers < ActiveRecord::Migration
  def up
    members = JSON.parse IO.read("#{File.dirname __FILE__}/seed_members.json")
    members.each do |data|
      new_member = Member.new data
      new_member.save
    end
  end

  def down
    Member.delete_all
  end
end
