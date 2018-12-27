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

  handleOpenModal = (event) => {
    this.setState({
      modalVisible: true
    })
  }

  render() {
    return (
      <HandleError>
        <Layout>
          <Related />
          <VideoPlayer/>
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
                <h1>fsdfasdfasd</h1>
              </Modal>
            </ModalContainer>
          }
        </Layout>
      </HandleError>
    )
  }
}

export default Home;