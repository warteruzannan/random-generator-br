import {memo} from 'react';
import {Modal, ModalProps, StyleSheet, View} from 'react-native';
import {colors, dimensions} from '../../consts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.TRANSPARENT,
    justifyContent: 'center',
    alignItems: 'center',
  },
  internal: {
    minWidth: dimensions.width(0.9),
    minHeight: dimensions.width(1),
    borderRadius: dimensions.BORDER_RADIOUS,
    elevation: dimensions.ELEVATION,
    borderWidth: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
});

type OwnProps = {};
export type ScreenModalProps = OwnProps & ModalProps;

const ScreenModal: React.FC<ScreenModalProps> = props => {
  return (
    <Modal
      {...props}
      transparent={true}
      animationType="fade"
      statusBarTranslucent={true}>
      <View style={styles.container}>
        <View style={styles.internal}>{props.children}</View>
      </View>
    </Modal>
  );
};

export default memo(ScreenModal);
