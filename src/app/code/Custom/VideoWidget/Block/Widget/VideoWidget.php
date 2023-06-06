<?php 
namespace Custom\VideoWidget\Block\Widget;



class VideoWidget extends \Magento\Framework\View\Element\Template implements \Magento\Widget\Block\BlockInterface
{
    protected $_template = 'widget/video_widget.phtml';

    public function getVideoUrl()
    {
        return $this->getData('video_url');
    }
}