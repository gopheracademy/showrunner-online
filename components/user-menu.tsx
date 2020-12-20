import cn from 'classnames';
import UserDefaultAvatar from './icons/icon-usermenu';
import styles from './user-menu.module.css';

type Props = {
    username: string;
    signInHandler: (event: React.MouseEvent<HTMLElement>) => void;
    signOutHandler: (event: React.MouseEvent<HTMLElement>) => void;
};

export default function UserMenuProfile({ username, signInHandler, signOutHandler }: Props) {
    return (
        <div className={styles.profile}>
            <span
              className={cn(styles.skeleton, styles.wrapper, styles.inline, styles.rounded)}
            >
              <span>
                <UserDefaultAvatar color={'var(--secondary-color'} height={60}/>
              </span>
            </span>
            <div className={styles.text}
                 onClick = {!username ? signInHandler : signOutHandler}
            >
                <p
                    className={cn(styles.name, {
                        [styles['name-blank']]: !username
                    })}
                >
                    <span
                        className={cn(styles.skeleton, styles.wrapper)}
                    >
                        {username || 'REGISTER'}
                    </span>
                </p>
                <p className={styles.username}>
                    <span
                        className={cn(styles.skeleton, styles.wrapper)}
                    >
                        <span className={styles.githubIcon}>
                            {username ? 'Log Out' : 'Log In' }
                        </span>
                    </span>
                </p>
            </div>
        </div>
    );
}
