class Todo < ActiveRecord::Base
  validates :title, :body, presence: true
  validates :done, inclusion: [true, false]

  has_many :steps, dependent: :destroy

  after_initialize :ensure_done

  def ensure_done
    self.done ||= false
  end
end
