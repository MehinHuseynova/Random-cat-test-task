import { makeStyles } from 'tss-react/mui'

export const useStyles = makeStyles<{ color: string }>()((theme) => {
  return {
    root: {
      boxSizing: 'border-box',
    },
  }
})
