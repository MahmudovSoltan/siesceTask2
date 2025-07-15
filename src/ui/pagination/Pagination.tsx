import React from "react"

import styles from "./css/pagination.module.css"
import { getPageNumbers } from "../../utils/pagination"

interface Props {
  currentPage: number
  totalCount: number
  pageSize: number
  searchPhrase?: string
  onPageChange: (page: number) => void
}

const Pagination: React.FC<Props> = ({
  currentPage,
  totalCount,
  pageSize,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalCount / pageSize)
  const pages = getPageNumbers(currentPage, totalPages)

  return (
    <div className={styles.wrapper}>
      <button
        disabled={currentPage === 1}
        onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
        className={styles.button}
      >
        ‹
      </button>

      {pages.map((page, idx) => (
        <button
          key={idx}
          disabled={page === "..."}
          onClick={() => typeof page === "number" && onPageChange(page)}
          className={`${styles.button} ${page === currentPage ? styles.active : ""}`}
        >
          {page}
        </button>
      ))}

      <button
        disabled={currentPage === totalPages}
        onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
        className={styles.button}
      >
        ›
      </button>
    </div>
  )
}

export default Pagination
