import { Children, ReactElement, useMemo, useState } from 'react';

import cn from 'classnames';

import styles from './styles.scss';

type TTabsProps = {
  children: ReactElement[];
  names: string[];
  isDark?: boolean;
  activeTab?: string;
};

export function Tabs({ children, names, isDark = false, activeTab: propsActiveTab }: TTabsProps) {
  const [activeTab, setActiveTab] = useState(propsActiveTab ?? names[0]);

  const renderedContent: ReactElement[] = useMemo(() => {
    return Children.map(children, function (component: ReactElement) {
      return (
        <div
          className={cn(styles.Tabs__contentItem, {
            [styles.Tabs__contentItem_active]: component.props.name === activeTab,
          })}
        >
          {component}
        </div>
      );
    });
  }, [children, activeTab]);

  return (
    <div>
      <div className={cn(styles.Tabs, { [styles.Tabs_dark]: isDark })}>
        {names.map((el) => (
          <div
            key={el}
            onClick={() => setActiveTab(el)}
            className={cn(styles.Tabs__tab, { [styles.Tabs__tab_active]: activeTab === el })}
          >
            {el}
          </div>
        ))}
      </div>
      <div className={styles.Tabs__content}>{renderedContent}</div>
    </div>
  );
}
