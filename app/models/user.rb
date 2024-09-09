# frozen_string_literal: true

class User < ApplicationRecord
  MAX_NAME_LENGTH = 225
  has_many :assigned_tasks, foreign_key: :assigned_user_id, class_name: "Task"

  validates :name, presence: true, length: { maximum: MAX_NAME_LENGTH }
end
