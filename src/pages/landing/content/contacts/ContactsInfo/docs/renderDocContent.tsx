import { Heading } from '@components/Title';

import { IOfferData } from './const';
import styles from './styles.module.scss';

export function RenderDocContent({ data }: { data: IOfferData[] }) {
  return (
    <ul className={styles.RenderDoc}>
      {data.map((item, index) => (
        <li key={index}>
          <Heading.H4>
            {index + 1}. {item.title}
          </Heading.H4>
          {item.description && <p>{item.description}</p>}
          <ul>
            {item.list.map((subItem, subIndex) => (
              <li key={`${index}.${subIndex}`}>
                {subItem.text && (
                  <>
                    <span className={styles.RenderDoc__number}>
                      {index + 1}.{subIndex + 1}
                    </span>
                    <span dangerouslySetInnerHTML={{ __html: subItem.text }} />
                  </>
                )}
                {subItem.title && (
                  <Heading.H4>
                    {index + 1}.{subIndex + 1} {subItem.title}
                  </Heading.H4>
                )}

                {subItem.extList && (
                  <ul>
                    {subItem.extList.map((ext) => (
                      <li key={`${index}.${subIndex}`}>{ext}</li>
                    ))}
                  </ul>
                )}

                {subItem.subList && (
                  <ul>
                    {subItem?.subList?.map((subListItem, subListIndex) => (
                      <li key={`${index}.${subIndex}.${subListIndex}`}>
                        <span className={styles.RenderDoc__number}>
                          {index + 1}.{subIndex + 1}.{subListIndex + 1}
                        </span>
                        {subListItem.text}
                        {subListItem.extList && (
                          <ul>
                            {subListItem.extList.map((ext, extIndex) => (
                              <li key={`${index}.${subIndex}.${subListIndex}.${extIndex}`}>
                                {ext}
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}
