class Api::TodosController < ApplicationController

  def index
    @todos = Todo.all.order(:topic, created_at: :desc)
    render json: @todos
  end

  def show
    @todo = Todo.find(params[:id])
    render json: @todo
  end

  def create
    @todo = Todo.create!(todo_params)
    render json: @todo
  end

  def destroy
    @todo = Todo.find(params[:id])
    @todo.destroy!
    render json: @todo
  end

  def update
    @todo = Todo.find(params[:id])
    @todo.update!(todo_params)
    render json: @todo
  end

  private

    def todo_params
      params.require(:todo).permit(:title, :body, :done, :topic)
    end
end
