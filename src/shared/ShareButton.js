import React from 'react';
import { Pressable, Share } from 'react-native';
import ShareIcon from '../../assets/icons/share.svg'

const ShareButton = ({ title, message, url }) => {
  const handleShare = async () => {
    const shareContent = {
      title: title,
      message: message,
      url: url,
    };

    try {
      const result = await Share.share(shareContent);

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          console.log('Success');
        } else {
          console.log('Rejected');
        }
      } else if (result.action === Share.dismissedAction) {
        console.log('Closed');
      }
    } catch (error) {
      console.error('Error: ', error.message);
    }
  };

  return (
    <Pressable onPress={handleShare}>
      <ShareIcon />
    </Pressable>
  );
};

export default ShareButton;
