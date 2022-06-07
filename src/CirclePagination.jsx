import { func, number } from 'prop-types';
import React from 'react';
import Pagination from 'react-js-pagination';
import styled from 'styled-components';
const configuration = {
	activeLinkClass: 'pagination-active',
	getPageUrl: () => null,
	hideDisabled: true,
	hideFirstLastPages: true,
	innerClass: 'pagination',
	itemClass: 'pagination-item',
	itemsCountPerPage: 1,
	linkClass: 'pagination-link',
	pageRangeDisplayed: 4,
	nextPageText: (
		<svg width='8' height='12' viewBox='0 0 8 12'>
			<path d='M6.83018 5.29019L2.59019 1.05019C2.49722 0.956464 2.38662 0.88207 2.26476 0.831301C2.1429 0.780533 2.0122 0.754395 1.88019 0.754395C1.74817 0.754395 1.61747 0.780533 1.49561 0.831301C1.37375 0.88207 1.26315 0.956464 1.17019 1.05019C0.983936 1.23756 0.879395 1.49101 0.879395 1.75519C0.879395 2.01938 0.983936 2.27283 1.17019 2.46019L4.71019 6.00019L1.17019 9.54019C0.983936 9.72756 0.879395 9.98101 0.879395 10.2452C0.879395 10.5094 0.983936 10.7628 1.17019 10.9502C1.26363 11.0429 1.37444 11.1162 1.49628 11.166C1.61812 11.2157 1.74858 11.241 1.88019 11.2402C2.01179 11.241 2.14226 11.2157 2.26409 11.166C2.38593 11.1162 2.49675 11.0429 2.59019 10.9502L6.83018 6.71019C6.92391 6.61723 6.99831 6.50663 7.04908 6.38477C7.09984 6.26291 7.12598 6.13221 7.12598 6.00019C7.12598 5.86818 7.09984 5.73748 7.04908 5.61562C6.99831 5.49376 6.92391 5.38316 6.83018 5.29019Z' />
		</svg>
	),
	prevPageText: (
		<svg width='8' height='12' viewBox='0 0 8 12'>
			<path d='M1.16982 5.29019L5.40981 1.05019C5.50278 0.956464 5.61338 0.88207 5.73524 0.831301C5.8571 0.780533 5.9878 0.754395 6.11981 0.754395C6.25183 0.754395 6.38253 0.780533 6.50439 0.831301C6.62625 0.88207 6.73685 0.956464 6.82981 1.05019C7.01606 1.23756 7.12061 1.49101 7.12061 1.75519C7.12061 2.01938 7.01606 2.27283 6.82981 2.46019L3.28981 6.00019L6.82981 9.54019C7.01606 9.72756 7.12061 9.98101 7.12061 10.2452C7.12061 10.5094 7.01606 10.7628 6.82981 10.9502C6.73637 11.0429 6.62556 11.1162 6.50372 11.166C6.38188 11.2157 6.25142 11.241 6.11981 11.2402C5.98821 11.241 5.85774 11.2157 5.73591 11.166C5.61407 11.1162 5.50325 11.0429 5.40981 10.9502L1.16982 6.71019C1.07609 6.61723 1.00169 6.50663 0.950924 6.38477C0.900155 6.26291 0.874017 6.13221 0.874017 6.00019C0.874017 5.86818 0.900155 5.73748 0.950924 5.61562C1.00169 5.49376 1.07609 5.38316 1.16982 5.29019Z' />
		</svg>
	),
};
const StyledElement = styled.div`
	align-items: center;
	display: flex;
	justify-content: center;
	width: 100%;
	& .pagination {
		display: flex;
		list-style: none;
		margin: 0;
		padding: 0;
		& .pagination-item {
			border-radius: 50%;
			cursor: pointer;
			font-size: 15px;
			font-weight: 600;
			height: 39px;
			margin: 0 5px;
			user-select: none;
			width: 39px;
			&:first-child {
				margin: 0 5px 0 0;
			}
			&:last-child {
				margin: 0 0 0 5px;
			}
			&:hover {
				& .pagination-link {
					background: blue;
					border: 1px solid blue;
					color: white;
					& svg {
						& path {
							fill: #ffffff;
						}
					}
				}
			}
			& .pagination-link {
				align-items: center;
				border-radius: 50%;
				border: 1px solid rgba(110, 120, 146, 0.5);
				color: #6e7892;
				display: flex;
				height: 38px;
				justify-content: center;
				text-decoration: none;
				transition: 0.5s;
				width: 38px;
				& svg {
					& path {
						fill: #6e7892;
						transition: 0.5s;
					}
				}
			}
			& .pagination-active {
				background: blue;
				border: 1px solid blue;
				color: white;
			}
		}
	}
`;
const Component = ({ totalItemsCount, setActivePage, activePage }) => (
	<StyledElement>
		<Pagination
			{...configuration}
			activePage={activePage}
			onChange={setActivePage}
			totalItemsCount={totalItemsCount}
		/>
	</StyledElement>
);
Component.defaultProps = {
	activePage: 1,
	totalItemsCount: 1,
};
Component.propTypes = {
	activePage: number.isRequired,
	setActivePage: func.isRequired,
	totalItemsCount: number.isRequired,
};
export default Component;
