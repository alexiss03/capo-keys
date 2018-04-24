import React, { Component } from 'react';
import { View, Modal } from 'react-native';
import { Button, Text} from 'react-native-elements';
import { connect } from 'react-redux';
import { SCREEN_WIDTH, SCREEN_HEIGHT} from '../constants';
import { closeChordsModal } from '../actions';

class ChordsModal extends Component {
  render() {
    const {
      modalStyle,
      containerStyle,
      contentStyle,
      contentRowStyle,
      headerStyle,
      itemContainerStyle,
      itemHeadStyle,
      itemStyle,
      buttonContainerStyle,
    } = styles;

    return (
      <Modal
        transparent
        animationType={'slide'}
        visible={this.props.modal.chordsModailIsOpen}
        onRequestClose={() => this.props.closeChordsModal()}
      >
        <View style={modalStyle}>
          <View style={containerStyle}>
            {/* Other Content*/}

              <View style={headerStyle}>
                <Text h4 style={{ color: 'white' }}>
                  Chords Transitions
                </Text>
              </View>

              <View style={contentStyle}>
                <View style={contentRowStyle}>
                  <View style={itemContainerStyle}>
                    <Text style={itemStyle, itemHeadStyle}>
                      Key 6//
                    </Text>
                  </View>

                  <View style={itemContainerStyle}>
                    <Text style={itemStyle, itemHeadStyle}> => </Text>
                  </View>

                  <View style={itemContainerStyle}>
                    <Text style={itemStyle, itemHeadStyle}>
                      Capo 7//
                    </Text>
                  </View>
                </View>

                <View style={contentRowStyle}>
                  <View style={itemContainerStyle}>
                    <Text style={itemStyle}>
                      Key 6//
                    </Text>
                  </View>

                  <View style={itemContainerStyle}>
                    <Text style={itemStyle}> => </Text>
                  </View>

                  <View style={itemContainerStyle}>
                    <Text style={itemStyle}>
                      Capo 7//
                    </Text>
                  </View>
                </View>


                <View style={contentRowStyle}>
                  <View style={itemContainerStyle}>
                    <Text style={itemStyle}>
                      Key 6//
                    </Text>
                  </View>

                  <View style={itemContainerStyle}>
                    <Text style={itemStyle}> => </Text>
                  </View>

                  <View style={itemContainerStyle}>
                    <Text style={itemStyle}>
                      Capo 7//
                    </Text>
                  </View>
                </View>

                <View style={contentRowStyle}>
                  <View style={itemContainerStyle}>
                    <Text style={itemStyle}>
                      Key 6//
                    </Text>
                  </View>

                  <View style={itemContainerStyle}>
                    <Text style={itemStyle}> => </Text>
                  </View>

                  <View style={itemContainerStyle}>
                    <Text style={itemStyle}>
                      Capo 7//
                    </Text>
                  </View>
                </View>

                <View style={buttonContainerStyle}>
                  <Button
                    raised
                    icon={{ 'name': 'close'}}
                    title="Close"
                    backgroundColor="#2196f3"
                    onPress={ () => this.props.closeChordsModal()}
                  />
                </View>
              </View>
          </View>
        </View>
      </Modal>
    )
  }
}

const marginPercent = 0.05

const styles = {
  modalStyle: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  containerStyle: {
    flex: 1,
    marginVertical: SCREEN_HEIGHT * marginPercent,
    marginHorizontal: SCREEN_WIDTH * marginPercent,
    backgroundColor: 'white'
  },
  headerStyle: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  contentStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  contentRowStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  itemContainerStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  itemHeadStyle: {
    fontWeight: '900',
    fontSize: 14
  },
  itemStyle: {
    alignItems: 'center',
    fontSize: 16,
    textAlign: 'center'
  },
  buttonContainerStyle: {
    paddingBottom: 10
  },
}

const mapStateToProps = ({ modal, selectedValues, keys }) => ({ modal, selectedValues, keys });

export default connect(mapStateToProps, { closeChordsModal })(ChordsModal);
