import React from 'react';
import '@testing-library/jest-dom';

import { types as sdkTypes } from '../../../util/sdkLoader';
import { renderWithProviders as render, testingLibrary } from '../../../util/testHelpers';
import { createOwnListing, createStock, fakeIntl } from '../../../util/testData';

import { ManageListingCardComponent } from './ManageListingCard';

const { screen, waitFor } = testingLibrary;

const { Money } = sdkTypes;
const noop = () => null;

describe('ManageListingCard', () => {
  it('Booking (day): normal', () => {
    const listing = createOwnListing('listing-day', {
      title: 'the listing',
      description: 'Lorem ipsum',
      price: new Money(1000, 'USD'),
      availabilityPlan: {
        type: 'availability-plan/time',
        timezone: 'Etc/UTC',
        entries: [
          { dayOfWeek: 'mon', startTime: '00:00', endTime: '00:00', seats: 1 },
          { dayOfWeek: 'tue', startTime: '00:00', endTime: '00:00', seats: 1 },
          { dayOfWeek: 'wed', startTime: '00:00', endTime: '00:00', seats: 1 },
          { dayOfWeek: 'thu', startTime: '00:00', endTime: '00:00', seats: 1 },
          { dayOfWeek: 'fri', startTime: '00:00', endTime: '00:00', seats: 1 },
          { dayOfWeek: 'sat', startTime: '00:00', endTime: '00:00', seats: 1 },
          //{ dayOfWeek: 'sun', startTime: '00:00', endTime: '00:00', seats: 1 },
        ],
      },

      publicData: {
        listingType: 'rent-bicycles-daily',
        transactionProcessAlias: 'default-booking/release-1',
        unitType: 'hour',
        amenities: ['dog_1'],
        location: {
          address: 'Main Street 123',
          building: 'A 1',
        },
      },
    });

    const tree = render(
      <ManageListingCardComponent
        history={{ push: noop }}
        listing={listing}
        intl={fakeIntl}
        isMenuOpen={false}
        onCloseListing={noop}
        onOpenListing={noop}
        onToggleMenu={noop}
        hasClosingError={false}
        hasOpeningError={false}
        availabilityEnabled={true}
      />
    );
    expect(tree.getByText('ResponsiveImage.noImage')).toBeInTheDocument();
    expect(tree.getByText('ManageListingCard.closeListing')).toBeInTheDocument();
    expect(tree.getByText('10')).toBeInTheDocument(); //fakeIntl
    expect(tree.getByText('ManageListingCard.perUnit')).toBeInTheDocument();
    expect(tree.getByText(/the Listing/i)).toBeInTheDocument();
    expect(tree.getByText('ManageListingCard.editListing')).toBeInTheDocument();
    expect(tree.getByText('ManageListingCard.manageAvailability')).toBeInTheDocument();
  });

  it('Booking (day): closed', () => {
    const listing = createOwnListing('listing-day', {
      title: 'the listing',
      description: 'Lorem ipsum',
      price: new Money(1000, 'USD'),
      state: 'closed',
      availabilityPlan: {
        type: 'availability-plan/time',
        timezone: 'Etc/UTC',
        entries: [
          { dayOfWeek: 'mon', startTime: '00:00', endTime: '00:00', seats: 1 },
          { dayOfWeek: 'tue', startTime: '00:00', endTime: '00:00', seats: 1 },
          { dayOfWeek: 'wed', startTime: '00:00', endTime: '00:00', seats: 1 },
          { dayOfWeek: 'thu', startTime: '00:00', endTime: '00:00', seats: 1 },
          { dayOfWeek: 'fri', startTime: '00:00', endTime: '00:00', seats: 1 },
          { dayOfWeek: 'sat', startTime: '00:00', endTime: '00:00', seats: 1 },
          //{ dayOfWeek: 'sun', startTime: '00:00', endTime: '00:00', seats: 1 },
        ],
      },

      publicData: {
        listingType: 'rent-bicycles-daily',
        transactionProcessAlias: 'default-booking/release-1',
        unitType: 'hour',
        amenities: ['dog_1'],
        location: {
          address: 'Main Street 123',
          building: 'A 1',
        },
      },
    });

    const tree = render(
      <ManageListingCardComponent
        history={{ push: noop }}
        listing={listing}
        intl={fakeIntl}
        isMenuOpen={false}
        onCloseListing={noop}
        onOpenListing={noop}
        onToggleMenu={noop}
        hasClosingError={false}
        hasOpeningError={false}
        availabilityEnabled={true}
      />
    );
    expect(tree.getByText('ResponsiveImage.noImage')).toBeInTheDocument();
    expect(tree.getByText('ManageListingCard.closeListing')).toBeInTheDocument();
    expect(tree.getByText('10')).toBeInTheDocument(); //fakeIntl
    expect(tree.getByText('ManageListingCard.perUnit')).toBeInTheDocument();
    expect(tree.getByText(/the Listing/i)).toBeInTheDocument();
    expect(tree.getByText('ManageListingCard.editListing')).toBeInTheDocument();
    expect(tree.getByText('ManageListingCard.manageAvailability')).toBeInTheDocument();

    expect(tree.getByText('ManageListingCard.closedListing')).toBeInTheDocument();
    expect(tree.getByText('ManageListingCard.openListing')).toBeInTheDocument();
  });

  it('Booking (day): pendingApproval', () => {
    const listing = createOwnListing('listing-day', {
      title: 'the listing',
      description: 'Lorem ipsum',
      price: new Money(1000, 'USD'),
      state: 'pendingApproval',
      availabilityPlan: {
        type: 'availability-plan/time',
        timezone: 'Etc/UTC',
        entries: [
          { dayOfWeek: 'mon', startTime: '00:00', endTime: '00:00', seats: 1 },
          { dayOfWeek: 'tue', startTime: '00:00', endTime: '00:00', seats: 1 },
          { dayOfWeek: 'wed', startTime: '00:00', endTime: '00:00', seats: 1 },
          { dayOfWeek: 'thu', startTime: '00:00', endTime: '00:00', seats: 1 },
          { dayOfWeek: 'fri', startTime: '00:00', endTime: '00:00', seats: 1 },
          { dayOfWeek: 'sat', startTime: '00:00', endTime: '00:00', seats: 1 },
          //{ dayOfWeek: 'sun', startTime: '00:00', endTime: '00:00', seats: 1 },
        ],
      },

      publicData: {
        listingType: 'rent-bicycles-daily',
        transactionProcessAlias: 'default-booking/release-1',
        unitType: 'hour',
        amenities: ['dog_1'],
        location: {
          address: 'Main Street 123',
          building: 'A 1',
        },
      },
    });

    const tree = render(
      <ManageListingCardComponent
        history={{ push: noop }}
        listing={listing}
        intl={fakeIntl}
        isMenuOpen={false}
        onCloseListing={noop}
        onOpenListing={noop}
        onToggleMenu={noop}
        hasClosingError={false}
        hasOpeningError={false}
        availabilityEnabled={true}
      />
    );
    expect(tree.getByText('ResponsiveImage.noImage')).toBeInTheDocument();
    expect(tree.getByText('ManageListingCard.closeListing')).toBeInTheDocument();
    expect(tree.getByText('10')).toBeInTheDocument(); //fakeIntl
    expect(tree.getByText('ManageListingCard.perUnit')).toBeInTheDocument();
    expect(tree.getByText(/the Listing/i)).toBeInTheDocument();
    expect(tree.getByText('ManageListingCard.editListing')).toBeInTheDocument();
    expect(tree.getByText('ManageListingCard.manageAvailability')).toBeInTheDocument();

    expect(tree.getByText('ManageListingCard.pendingApproval')).toBeInTheDocument();
  });

  it('Booking (day): draft', () => {
    const listing = createOwnListing('listing-day', {
      title: 'the listing',
      description: 'Lorem ipsum',
      price: new Money(1000, 'USD'),
      state: 'draft',
      availabilityPlan: {
        type: 'availability-plan/time',
        timezone: 'Etc/UTC',
        entries: [
          { dayOfWeek: 'mon', startTime: '00:00', endTime: '00:00', seats: 1 },
          { dayOfWeek: 'tue', startTime: '00:00', endTime: '00:00', seats: 1 },
          { dayOfWeek: 'wed', startTime: '00:00', endTime: '00:00', seats: 1 },
          { dayOfWeek: 'thu', startTime: '00:00', endTime: '00:00', seats: 1 },
          { dayOfWeek: 'fri', startTime: '00:00', endTime: '00:00', seats: 1 },
          { dayOfWeek: 'sat', startTime: '00:00', endTime: '00:00', seats: 1 },
          //{ dayOfWeek: 'sun', startTime: '00:00', endTime: '00:00', seats: 1 },
        ],
      },

      publicData: {
        listingType: 'rent-bicycles-daily',
        transactionProcessAlias: 'default-booking/release-1',
        unitType: 'hour',
        amenities: ['dog_1'],
        location: {
          address: 'Main Street 123',
          building: 'A 1',
        },
      },
    });

    const tree = render(
      <ManageListingCardComponent
        history={{ push: noop }}
        listing={listing}
        intl={fakeIntl}
        isMenuOpen={false}
        onCloseListing={noop}
        onOpenListing={noop}
        onToggleMenu={noop}
        hasClosingError={false}
        hasOpeningError={false}
        availabilityEnabled={true}
      />
    );

    expect(tree.getByText('ResponsiveImage.noImage')).toBeInTheDocument();
    expect(tree.getByText('ManageListingCard.closeListing')).toBeInTheDocument();
    expect(tree.getByText('10')).toBeInTheDocument(); //fakeIntl
    expect(tree.getByText('ManageListingCard.perUnit')).toBeInTheDocument();
    expect(tree.getByText(/the Listing/i)).toBeInTheDocument();
    expect(tree.getByText('ManageListingCard.editListing')).toBeInTheDocument();
    expect(tree.getByText('ManageListingCard.manageAvailability')).toBeInTheDocument();

    expect(tree.getByText('ManageListingCard.draftOverlayText')).toBeInTheDocument();
    expect(tree.getByText('ManageListingCard.finishListingDraft')).toBeInTheDocument();
  });

  it('Booking (day): no price', () => {
    const listing = createOwnListing('listing-day', {
      title: 'the listing',
      description: 'Lorem ipsum',
      price: null,
      availabilityPlan: {
        type: 'availability-plan/time',
        timezone: 'Etc/UTC',
        entries: [
          { dayOfWeek: 'mon', startTime: '00:00', endTime: '00:00', seats: 1 },
          { dayOfWeek: 'tue', startTime: '00:00', endTime: '00:00', seats: 1 },
          { dayOfWeek: 'wed', startTime: '00:00', endTime: '00:00', seats: 1 },
          { dayOfWeek: 'thu', startTime: '00:00', endTime: '00:00', seats: 1 },
          { dayOfWeek: 'fri', startTime: '00:00', endTime: '00:00', seats: 1 },
          { dayOfWeek: 'sat', startTime: '00:00', endTime: '00:00', seats: 1 },
          //{ dayOfWeek: 'sun', startTime: '00:00', endTime: '00:00', seats: 1 },
        ],
      },

      publicData: {
        listingType: 'rent-bicycles-daily',
        transactionProcessAlias: 'default-booking/release-1',
        unitType: 'hour',
        amenities: ['dog_1'],
        location: {
          address: 'Main Street 123',
          building: 'A 1',
        },
      },
    });

    const tree = render(
      <ManageListingCardComponent
        history={{ push: noop }}
        listing={listing}
        intl={fakeIntl}
        isMenuOpen={false}
        onCloseListing={noop}
        onOpenListing={noop}
        onToggleMenu={noop}
        hasClosingError={false}
        hasOpeningError={false}
        availabilityEnabled={true}
      />
    );
    expect(tree.getByText('ResponsiveImage.noImage')).toBeInTheDocument();
    expect(tree.getByText('ManageListingCard.closeListing')).toBeInTheDocument();
    expect(tree.getByText('ManageListingCard.priceNotSet')).toBeInTheDocument();
    expect(tree.getByText(/the Listing/i)).toBeInTheDocument();
    expect(tree.getByText('ManageListingCard.editListing')).toBeInTheDocument();
    expect(tree.getByText('ManageListingCard.manageAvailability')).toBeInTheDocument();
  });

  it('Purchase (item): normal', () => {
    const listing = createOwnListing(
      'listing-day',
      {
        title: 'the listing',
        description: 'Lorem ipsum',
        price: new Money(1000, 'USD'),
        availabilityPlan: null,

        publicData: {
          listingType: 'sel-bicycles-item',
          transactionProcessAlias: 'default-purchase/release-1',
          unitType: 'item',
          amenities: ['dog_1'],
          location: {
            address: 'Main Street 123',
            building: 'A 1',
          },
        },
      },
      {
        currentStock: createStock('stock-id', { quantity: 5 }),
      }
    );

    const tree = render(
      <ManageListingCardComponent
        history={{ push: noop }}
        listing={listing}
        intl={fakeIntl}
        isMenuOpen={false}
        onCloseListing={noop}
        onOpenListing={noop}
        onToggleMenu={noop}
        hasClosingError={false}
        hasOpeningError={false}
        availabilityEnabled={true}
      />
    );

    expect(tree.getByText('ResponsiveImage.noImage')).toBeInTheDocument();
    expect(tree.getByText('ManageListingCard.closeListing')).toBeInTheDocument();
    expect(tree.getByText('10')).toBeInTheDocument(); //fakeIntl
    expect(tree.getByText(/the Listing/i)).toBeInTheDocument();
    expect(tree.getByText('ManageListingCard.editListing')).toBeInTheDocument();
    expect(tree.getByText('ManageListingCard.manageStock')).toBeInTheDocument();
  });

  it('Purchase (item): normal out-of-stock', () => {
    const listing = createOwnListing(
      'listing-day',
      {
        title: 'the listing',
        description: 'Lorem ipsum',
        price: new Money(1000, 'USD'),
        availabilityPlan: null,

        publicData: {
          listingType: 'sell-bicycles-item',
          transactionProcessAlias: 'default-purchase/release-1',
          unitType: 'item',
          amenities: ['dog_1'],
          location: {
            address: 'Main Street 123',
            building: 'A 1',
          },
        },
      },
      {
        currentStock: createStock('stock-id', { quantity: 0 }),
      }
    );

    const tree = render(
      <ManageListingCardComponent
        history={{ push: noop }}
        listing={listing}
        intl={fakeIntl}
        isMenuOpen={false}
        onCloseListing={noop}
        onOpenListing={noop}
        onToggleMenu={noop}
        hasClosingError={false}
        hasOpeningError={false}
        availabilityEnabled={true}
      />
    );

    expect(tree.getByText('ResponsiveImage.noImage')).toBeInTheDocument();
    expect(tree.getByText('ManageListingCard.closeListing')).toBeInTheDocument();
    expect(tree.getByText('10')).toBeInTheDocument(); //fakeIntl
    expect(tree.getByText(/the Listing/i)).toBeInTheDocument();
    expect(tree.getByText('ManageListingCard.editListing')).toBeInTheDocument();
    expect(tree.getByText('ManageListingCard.manageStock')).toBeInTheDocument();

    // Out of stock
    expect(tree.getByText('ManageListingCard.outOfStockOverlayText')).toBeInTheDocument();
    expect(tree.getByText('ManageListingCard.setPriceAndStock')).toBeInTheDocument();
    expect(tree.getByText('ManageListingCard.closeListingTextOr')).toBeInTheDocument();
  });

  it('Purchase (item): normal', () => {
    const listing = createOwnListing(
      'listing-day',
      {
        title: 'the listing',
        description: 'Lorem ipsum',
        price: new Money(1000, 'USD'),
        availabilityPlan: null,
        state: 'draft',
        publicData: {
          listingType: 'sel-bicycles-item',
          transactionProcessAlias: 'default-purchase/release-1',
          unitType: 'item',
          amenities: ['dog_1'],
          location: {
            address: 'Main Street 123',
            building: 'A 1',
          },
        },
      },
      {
        currentStock: createStock('stock-id', { quantity: 5 }),
      }
    );

    const tree = render(
      <ManageListingCardComponent
        history={{ push: noop }}
        listing={listing}
        intl={fakeIntl}
        isMenuOpen={false}
        onCloseListing={noop}
        onOpenListing={noop}
        onToggleMenu={noop}
        hasClosingError={false}
        hasOpeningError={false}
        availabilityEnabled={true}
      />
    );

    expect(tree.getByText('ResponsiveImage.noImage')).toBeInTheDocument();
    expect(tree.getByText('ManageListingCard.closeListing')).toBeInTheDocument();
    expect(tree.getByText('10')).toBeInTheDocument(); //fakeIntl
    expect(tree.getByText(/the Listing/i)).toBeInTheDocument();
    expect(tree.getByText('ManageListingCard.editListing')).toBeInTheDocument();
    expect(tree.getByText('ManageListingCard.manageStock')).toBeInTheDocument();

    expect(tree.getByText('ManageListingCard.draftOverlayText')).toBeInTheDocument();
    expect(tree.getByText('ManageListingCard.finishListingDraft')).toBeInTheDocument();
  });

  it('Purchase (item): no price', () => {
    const listing = createOwnListing(
      'listing-day',
      {
        title: 'the listing',
        description: 'Lorem ipsum',
        price: null,
        availabilityPlan: null,

        publicData: {
          listingType: 'sell-bicycles-item',
          transactionProcessAlias: 'default-purchase/release-1',
          unitType: 'item',
          amenities: ['dog_1'],
          location: {
            address: 'Main Street 123',
            building: 'A 1',
          },
        },
      },
      {
        currentStock: createStock('stock-id', { quantity: 5 }),
      }
    );

    const tree = render(
      <ManageListingCardComponent
        history={{ push: noop }}
        listing={listing}
        intl={fakeIntl}
        isMenuOpen={false}
        onCloseListing={noop}
        onOpenListing={noop}
        onToggleMenu={noop}
        hasClosingError={false}
        hasOpeningError={false}
        availabilityEnabled={true}
      />
    );

    expect(tree.getByText('ResponsiveImage.noImage')).toBeInTheDocument();
    expect(tree.getByText('ManageListingCard.closeListing')).toBeInTheDocument();
    expect(tree.getByText('ManageListingCard.priceNotSet')).toBeInTheDocument();
    expect(tree.getByText(/the Listing/i)).toBeInTheDocument();
    expect(tree.getByText('ManageListingCard.editListing')).toBeInTheDocument();
    expect(tree.getByText('ManageListingCard.manageStock')).toBeInTheDocument();
  });

  it('Purchase (item): no stock', () => {
    const listing = createOwnListing('listing-day', {
      title: 'the listing',
      description: 'Lorem ipsum',
      price: new Money(1000, 'USD'),
      availabilityPlan: null,

      publicData: {
        listingType: 'sell-bicycles-item',
        transactionProcessAlias: 'default-purchase/release-1',
        unitType: 'item',
        amenities: ['dog_1'],
        location: {
          address: 'Main Street 123',
          building: 'A 1',
        },
      },
    });

    const tree = render(
      <ManageListingCardComponent
        history={{ push: noop }}
        listing={listing}
        intl={fakeIntl}
        isMenuOpen={false}
        onCloseListing={noop}
        onOpenListing={noop}
        onToggleMenu={noop}
        hasClosingError={false}
        hasOpeningError={false}
        availabilityEnabled={true}
      />
    );

    expect(tree.getByText('ResponsiveImage.noImage')).toBeInTheDocument();
    expect(tree.getByText('ManageListingCard.closeListing')).toBeInTheDocument();
    expect(tree.getByText('10')).toBeInTheDocument(); //fakeIntl
    expect(tree.getByText(/the Listing/i)).toBeInTheDocument();
    expect(tree.getByText('ManageListingCard.editListing')).toBeInTheDocument();
    expect(tree.getByText('ManageListingCard.setPriceAndStock')).toBeInTheDocument();
  });

  it('matches snapshot (purchase)', () => {
    const tree = render(
      <ManageListingCardComponent
        history={{ push: noop }}
        listing={createOwnListing('listing1', { publicData: { listingType: 'sell-bikes' } })}
        intl={fakeIntl}
        isMenuOpen={false}
        onCloseListing={noop}
        onOpenListing={noop}
        onToggleMenu={noop}
        hasClosingError={false}
        hasOpeningError={false}
        availabilityEnabled={true}
      />
    );
    expect(tree.asFragment().firstChild).toMatchSnapshot();
  });
});
