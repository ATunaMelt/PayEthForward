import React, {Component} from 'react'
import {Button, Card} from 'react-bootstrap'
import {connect} from 'react-redux'
import {getAllAwards} from '../store'
import {DonateForm} from '../components'
import {Link} from 'react-router-dom'

/**
 * COMPONENT
 */

class AllAwards extends Component {
  componentDidMount() {
    this.props.getAllAwards()
  }

  render() {
    const {awards} = this.props

    if (!awards.length) {
      return <h2> Loading awards... </h2>
    }

    return (
      <div className="container">
        <div className="row flex-wrap">
          {awards.map((award) => (
            <div className="col-lg-6 p-3" key={award.id}>
              <Card border="success" style={{width: '26rem'}}>
                <Card.Img variant="top" src={award.imageUrl} />
                <Card.Body>
                  <Card.Title>{award.title}</Card.Title>
                  <Card.Text>{award.description}</Card.Text>
                  <Button
                    as={Link}
                    to={`awards/${award.id}`}
                    variant="success ml-2"
                  >
                    More Info
                  </Button>
                  <DonateForm awardId={`${award.id}`} />
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    awards: state.awards
  }
}

const mapDispatch = (dispatch) => {
  return {
    getAllAwards: () => dispatch(getAllAwards())
  }
}

export default connect(mapState, mapDispatch)(AllAwards)
