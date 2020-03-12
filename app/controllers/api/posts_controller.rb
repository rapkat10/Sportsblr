class Api::PostsController < ApplicationController

    before_action :require_logged_in, only: [:create, :update, :destroy]

    def followedFilterPosts
        # following_ids = current_user.getfollowingIds(current_user)
        following_ids = current_user.followed_users.map { |user| user.id }
        Post.where(user_id: current_user.id)
            .or(Post.where(:user_id => following_ids))
    end

    def allposts
        Post.all
        # Post.order(id: :DESC).includes(:user).all
    end

    def currentpost
        Post.find_by(id: params[:id])
    end

    def index
        # debugger
        if params[:followedFilter]
            @posts = followedFilterPosts
            render 'api/posts/index'
        else 
            @posts = allposts
            render 'api/posts/index'
        end
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