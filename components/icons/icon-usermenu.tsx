import styles from './icon-usermenu.module.css';

type Props = { color: string; height?: number | string };

export default function PlatformLogo({ color, height = 100 }: Props) {
    return (
        <svg className="svg" xmlns="http://www.w3.org/2000/svg" height={height} viewBox="0 0 576 576">

            <circle className={styles.a}
                    style={{ stroke:color }}
                    cx="288" cy="288" r="285"/>
            <circle className={styles.b}
                    style={{ stroke:color }}
                    cx="151.8" cy="269.03" r="69.62"/>
            <path className={styles.a}
                  style={{ stroke:color }}
                  d="M1615.58,734c-24.38-79.48-9.86-82.26-24.8-126.74C1579.07,572.44,1550,545.4,1529,533c0,0,26.89-23.58,1-43-17.19-12.89-24.38,18-40,31a196.32,196.32,0,0,0-62-13c-25.19-1.1-30.27.88-47.25,3.75,0,0-9.66-36.07-30.75-25.75-22.42,11-9,41-9,41-11,4.83-20.14,9.75-31.51,19.83-8.93,7.92-18.76,16-30.49,37.17a53.48,53.48,0,0,0-3,4.81,69.63,69.63,0,1,1-28.58,117.36c-.17,2.25-.32,4.52-.46,6.83-3.31,55.61,8.55,185.82,8.55,185.82s70.45,60.84,176,60.84c94.76,0,139.08-36.18,139.08-36.18-13.06-52.42-3.38-92.24-.67-139.57,0,0,41,60.19,74,37.09C1674.89,799.36,1615.58,734,1615.58,734Z"
                  transform="translate(-1143.57 -386.66)"/>
            <circle className={styles.b}
                    style={{ stroke:color }}
                    cx="369.72" cy="269.03" r="69.62"/>
            <path className={styles.a}
                  style={{ stroke:color }}
                  d="M1250.81,838.44s-91.74-92.72-67.25-122.93,62.86,18.75,62.86,18.75Z"
                  transform="translate(-1143.57 -386.66)"/>
            <path className={styles.c}
                  style={{ stroke:color }}
                  d="M1514.32,505.12c3.22,10.37-5.7,22-5.7,22-.14-.48,8.28-13.12,17.85-12.55"
                  transform="translate(-1143.57 -386.66)"/>
            <path className={styles.d}
                  style={{ stroke:color }}
                  d="M1346.15,505c9.26,1.74,14.37,13.54,14.37,13.54-.42-.09-6.48-11.89-2-19.16"
                  transform="translate(-1143.57 -386.66)"/>
            <path className={styles.e}
                  style={{ fill:color }}
                  d="M1260.06,629.72a22.47,22.47,0,1,0,22.47,22.47A22.47,22.47,0,0,0,1260.06,629.72Zm4.22,22.47a6.74,6.74,0,1,1,6.74-6.74A6.74,6.74,0,0,1,1264.28,652.19Z"
                  transform="translate(-1143.57 -386.66)"/>
            <path className={styles.e}
                  style={{ fill:color }}
                  d="M1480.37,629.72a22.47,22.47,0,1,0,22.47,22.47A22.47,22.47,0,0,0,1480.37,629.72Zm4.22,22.47a6.74,6.74,0,1,1,6.74-6.74A6.74,6.74,0,0,1,1484.59,652.19Z"
                  transform="translate(-1143.57 -386.66)"/>
            <ellipse className="f"
                     style={{ stroke:color, fill:color }}
                     cx="262.51" cy="313.5" rx="15.41" ry="7.5"/>
            <path className={styles.a}
                  style={{ stroke:color }}
                  d="M1437,713.27c0,27.86-18.84,11.11-29.31,11.11-7.18,0-32.42,16.75-32.42-11.11,0-9.41,13-13.11,30.77-13.11S1437,703.86,1437,713.27Z"
                  transform="translate(-1143.57 -386.66)"/>
            <path className={styles.a}
                  style={{ stroke:color }}
                  d="M1427.17,737.83c0,11.42-3.29,27.85-17.43,27.85-13.08,0-20.56-16.43-20.56-27.85,0-13.52,15.54-14.24,18.55-14.29C1411.39,723.48,1427.17,726.41,1427.17,737.83Z"
                  transform="translate(-1143.57 -386.66)"/>
            <rect className={styles.e}
                  style={{ fill:color }}
                  x="254.98" y="341.42" width="4.14" height="9.69"/>
            <rect className={styles.e}
                  style={{ fill:color }}
                  x="264.6" y="339.35" width="6.48" height="10.77"/>
            <path className="g"
                  style={{ stroke:color }}
                  d="M1410.85,777.35a19.17,19.17,0,0,0,16.32-5.32" transform="translate(-1143.57 -386.66)"/>
            <path className="g"
                  style={{ stroke:color }}
                  d="M1297.71,571.39a11.71,11.71,0,0,1,22.7,2.84" transform="translate(-1143.57 -386.66)"/>
            <path className="g"
                  style={{ stroke:color }}
                  d="M1480.37,572.81a12.08,12.08,0,0,1,23.41-3.9" transform="translate(-1143.57 -386.66)"/>
            <path className={styles.e}
                  style={{ fill:color }}
                  d="M1402.9,763c-2.14-3,2.32-9.81,5.72-13.36,5.16-5.4,14.1-9.76,17.08-7s.23,12-5.56,17.07S1405.17,766.2,1402.9,763Z"
                  transform="translate(-1143.57 -386.66)"/>
        </svg>
    );
}