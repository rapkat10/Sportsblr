class Api::PostsController < ApplicationController

    def filteredposts
        @posts ||= Post.order(id: :DESC).includes(:user).all
    end

    # def allposts
    #     @posts ||= Post.all
    # end

    def currentpost
        @post ||= Post.find_by(id: params[:id])
    end

    def index
        @posts = filteredposts
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
        # @post.user_id = params[:id]
        @posts = filteredposts
        if @post.save
            render 'api/posts/index'
        else 
            render json: @user.errors.full_messages, status: 422
        end
    end

    def update
        @post = currentpost
        @posts = filteredposts
        if @post.update(post_params)
            render 'api/posts/index'
        else
            render 'api/posts/index'
        end
    end

    def destroy
        @post = currentpost
        @post.destroy
        @posts = filteredposts
        render 'api/posts/index'
    end

    private
    def post_params
        params.require(:post).permit(:title, :body, :post_type) 
    end

end