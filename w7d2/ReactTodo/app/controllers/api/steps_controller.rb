class Api::StepsController < ApplicationController

  def index
    @steps = Step.where(todo_id: params[:todo_id])
    render json: @steps
  end

  def create
    @todo = Todo.find(params[:todo_id])
    @step = @todo.steps.create!(step_params)
    render json: @step
  end

  def update
    @step = Step.find(params[:id])
    @step.update!(step_params)
    render json: @step
  end

  def destroy
    @step = Step.find(params[:id])
    @step.destroy!
    render json: @step
  end

  private

  def step_params
    params.require(:step).permit(:body, :done)
  end

end
