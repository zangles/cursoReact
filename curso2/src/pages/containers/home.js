import React, { Component } from 'react';
import Layout from '../components/home-layout';
import Categories from '../../categories/components/categories'
import Related from '../components/related'
import ModalContainer from '../../widgets/containers/modalcontainer'
import Modal from '../../widgets/components/modal'
import HandleError from '../../error/containers/handle-error'
import VideoPlayer from "../../player/containers/video-player";

class Home extends Component {
  state = {
    modalVisible: false,
  }

  handleCloseModal = (event) => {
    this.setState({
      modalVisible: false
    })
  }

  handleOpenModal = (media) => {
    this.setState({
      modalVisible: true,
      media
    })
  }

  render() {
    return (
      <HandleError>
        <Layout>
          <Related />
          <Categories
            categories={this.props.data.categories}
            handleOpenModal={this.handleOpenModal}
          />
          {
            this.state.modalVisible &&
            <ModalContainer>
              <Modal
                handleClick={this.handleCloseModal}
              >
                <VideoPlayer
                  autoplay={true}
                  src={this.state.media.src}
                  title={this.state.media.title}
                />
              </Modal>
            </ModalContainer>
          }
        </Layout>
      </HandleError>
    )
  }
}

export default Home;