class Api::PostsController < ApplicationController

    # before_action :require_logged_in, only: [:create, :update, :destroy]

    def filteredposts
        # @posts ||= Post.order(id: :DESC).includes(:user).where().all
        # implement when doing follows feature, will fetch only followed
        # posts!
    end

    def allposts
        # @posts ||= Post.order(id: :DESC).includes(:user).all
        @posts ||= Post.all
    end

    def currentpost
        @post ||= Post.find_by(id: params[:id])
    end

    def index
        @posts = allposts
        render 'api/posts/index'
    end

    def show
        @post = currentpost
        render 'api/posts/show'
    end

    def create
        @post = Post.new(post_params)
        # debugger
        @post.user_id = current_user.id
        if @post.save
            render 'api/posts/show'
        else 
            render json: @user.errors.full_messages, status: 422
        end
    end

    def update
        @post = currentpost
        if @post.update(post_params)
            render 'api/posts/show'
        else 
            render json: @user.errors.full_messages, status: 422
        end
    end

    def destroy
        @post = currentpost
        @post.destroy!
        @posts = allposts
        render 'api/posts/index'
    end

    private
    def post_params
        params.require(:post).permit(
            :title, 
            :body, 
            :post_type, 
            :photo, 
            :audio, 
            :video
        )
    end

end