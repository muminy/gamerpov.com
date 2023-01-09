import { HeaderLayout, HeaderProps } from ".";
import BlogDetailHeader from "./BlogDetailHeader";
import MainHeader from "./MainHeader";

export default function Header({ layout = HeaderLayout.MAIN }: HeaderProps) {
  const renderHeader = () => {
    switch (layout) {
      case HeaderLayout.BLOG:
        return <BlogDetailHeader />;
      case HeaderLayout.MAIN:
      default:
        return <MainHeader />;
    }
  };

  return renderHeader();
}
