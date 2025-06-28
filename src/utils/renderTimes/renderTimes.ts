import type { ReactNode } from 'react';

/**
 * @description
 * `renderTimes` is a utility function that renders components a specified number of times.
 * It's useful for creating repeated UI elements like lists, grids, skeleton loaders, or pagination items
 * without manual duplication or verbose Array.from constructs.
 *
 * @param {number} count - The number of times to render the component. Returns empty array if count is 0 or negative.
 * @param {(index: number) => ReactNode} renderFunction - Function that receives the current index (0-based) and returns a ReactNode to render.
 *
 * @returns {ReactNode[]} An array of ReactNode elements.
 *
 * @example
 * // Basic list rendering
 * function ItemList() {
 *   return (
 *     <div>
 *       {renderTimes(5, (index) => (
 *         <div key={index}>Item {index + 1}</div>
 *       ))}
 *     </div>
 *   );
 * }
 *
 * @example
 * // Skeleton loading state
 * function ProductSkeleton() {
 *   return (
 *     <div className="product-grid">
 *       {renderTimes(8, (index) => (
 *         <div key={index} className="product-card-skeleton">
 *           <div className="skeleton-image" />
 *           <div className="skeleton-title" />
 *           <div className="skeleton-price" />
 *         </div>
 *       ))}
 *     </div>
 *   );
 * }
 *
 * @example
 * // Pagination dots
 * function PaginationDots({ totalSlides, currentSlide }) {
 *   return (
 *     <div className="pagination-dots">
 *       {renderTimes(totalSlides, (index) => (
 *         <button
 *           key={index}
 *           className={`dot ${index === currentSlide ? 'active' : ''}`}
 *           onClick={() => goToSlide(index)}
 *         />
 *       ))}
 *     </div>
 *   );
 * }
 */
export function renderTimes(count: number, renderFunction: (index: number) => ReactNode): ReactNode[] {
  return Array.from({ length: count }, (_, index) => renderFunction(index));
}
